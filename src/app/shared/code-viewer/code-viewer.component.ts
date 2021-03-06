import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit {

// 'https://raw.githubusercontent.com/eliasagustin/pid/main/src/assets/codes/sensor_de_distancia_ultrasonico.ino'
 
  constructor() { }

  ngOnInit(): void {
  }

  code = `
  #include<Servo.h> // llamo a la libreria para el servo
  Servo myservo; // lo instancio
  
  // defino los numeros de pins sensor ultrasonico
  const int trigPinA = 9;
  const int echoPinA = 10;
  const int trigPinB = 6;
  const int echoPinB = 5;
  
  //defino las variables PID
  int kp = 3; 
  float ki = 1;
  int kd = 0;
  
  int periodoSeteado = 46; // guardado en kHz
  
  double Setpoint= 24; // seteo la distancia de entrada
  
  double acumError, tasaError, error, posicion;
  double ultimoError = 0;
  float PID_Total;
  int PID_grados;
  
  // define las variables
  long duracionA;
  long duracionB; 
  long anterior1A = 0; // variable guarda registro en el tiempo
  long anterior1B = 0;
  float distanciaA; // para distancia en cm
  float distanciaB; // para distancia en cm
  float distanciaTotal;
  float dist;
  int distancia2A; // para distancia en mm
  int distancia2B; // para distancia en mm
  
  // define banderas para sensores ultrasonicos
  boolean sensor_A = false;
  boolean sensor_B = false;
  
  //filtro paso bajo
  float Y_A = 0;
  float Y_B = 0;
  float alpha = 0.5;
  float S_A = Y_A;
  float S_B = Y_B;
  //===========
  
  //==== Variables de tiempo ====/
  unsigned long periodo = 0.0;
  unsigned long tiempo = 0.0;
  unsigned long tiempoAnt = 0.0; 
  //=============================/
  
  void setup() {
    Serial.begin(9600); // Comienza la comunicación serial
    myservo.attach(8);// asocio la instancia servo al pin digital 8
    pinMode(13, OUTPUT); 
    // Defino salida visual con el led de 10 prendido y apagado al arrancar  
    for(int i=0; i<10; i=i+1){
      digitalWrite(13, HIGH);
      delay(150);
      digitalWrite(13, LOW);
      delay(150);
      }
    pinMode(trigPinA, OUTPUT); // Defino trigPin como salida
    pinMode(echoPinA, INPUT); // Defino trigPin como entrada del eco
    pinMode(trigPinB, OUTPUT); // Defino trigPin como salida
    pinMode(echoPinB, INPUT); // Defino trigPin como entrada del eco
    myservo.write(75); // Le digo al servo que se dirija a un angulo de 75
    
    tiempo = millis();
  }
  
  void loop(){
      periodo =  millis() - tiempo;
      if (periodo>periodoSeteado){
      tiempo = millis();
      dist = (obtieneDistancia(trigPinA, trigPinB, echoPinA, echoPinB));
      error = Setpoint - dist; // calculo error
      if ((0<=(error+0.4))&&(error<=0.4)){
        //Serial.print("error: ");
        //Serial.print(error);
        error=0; 
        // Debido a que la falta de presicion del servo acoto la salida error+-2
        }
      PID_Total = computePID( error, millis() - tiempo);
      
      PID_Total = map(PID_Total, -230, 230, 45 , 125);
      //Mapeo la salida del pid a un rango de 0 a 150 
      PID_grados = (int)PID_Total;
      if(PID_grados < 45) //Establesco mínimo permitido a corregir
        {PID_grados = 45;}
      if(PID_grados > 125)
        {PID_grados = 125;} //Establesco máximo permitido a corregir
      myservo.write(PID_grados);
      //Muestro salida para graficar
      
      Serial.print("Setpoint: ");
      Serial.print(Setpoint,1);
          
      Serial.print(" ,error: ");
      Serial.println(Setpoint-(error),1);
    }
  }
  
  float computePID(double error, int tiempoTranscurrido){
    acumError = acumError + (error * tiempoTranscurrido); // calculo integral
    tasaError = (error - ultimoError)/tiempoTranscurrido; // calculo derivativa
    float salida = kp*error + ki*acumError + kd*tasaError; //PID
  
    ultimoError = error; //guardo el error acutal para la proxima iteracion
    return salida; //señal de salida del PID
  }
  
  float obtieneDistancia(int tP_A,int tP_B, int eP_A, int eP_B){
    
    // seteo las banderas para generar una salida estable de medicion
    sensor_A = false;
    sensor_B = false;
    while ((sensor_A == false) && (sensor_B == false)){
          // Limpia posible ruido del trigPin
          digitalWrite(tP_A, LOW);
          digitalWrite(tP_B, LOW);
          delayMicroseconds(2);
        
          // Seteo el trigPin on HIGH state for 10 micro segundos 
          // en otras palabras creo la señal, iniciando proceso de medicion en A
          digitalWrite(tP_A, HIGH);
          delayMicroseconds(10);
          digitalWrite(tP_A, LOW);
          
          // Leo la lectura devuelta por echoPin, 
          //que es la duracion de onda de sonido  en microsegundos
          duracionA = pulseIn(eP_A, HIGH);
          if (duracionA<3000 and duracionA>150){ // max y min
            if (anterior1A == 0){
              anterior1A == duracionA;
              } else {
                if(abs(anterior1A-duracionA)<150){
                  
                  if(anterior1A>duracionA){
                      duracionA = duracionA + 150;
                    }else{
                      duracionA = duracionA - 150;
                      }
                  anterior1A = duracionA;
                  }
                } 
          distanciaA = (duracionA * 0.034 / 2);
          S_A = (alpha*distanciaA) + ((1-alpha)*S_A);
          sensor_A = true;
          }
          
          // inicia lectura del sensor ultrasonico B
          digitalWrite(tP_B, HIGH);
          delayMicroseconds(10);
          digitalWrite(tP_B, LOW);
          duracionB = pulseIn(eP_B, HIGH);
           if (duracionB<3000 and duracionB>150){ // max y min
            if (anterior1B == 0){
              anterior1B == duracionB;
              } else {
                if(abs(anterior1B-duracionB)<150){
                  
                  if(anterior1B>duracionB){
                      duracionB = duracionB + 150;
                    }else{
                      duracionB = duracionB - 150;
                      }
                  anterior1B = duracionB;
                  }
                } 
          distanciaB = (duracionB * 0.034 / 2);
          S_B = (alpha*distanciaB) + ((1-alpha)*S_B);
          sensor_B = true;
          }
          //En el caso que la medicion esté fuera
          //  de rango dará error en las banderas
          if ((sensor_A == true) && (sensor_B == true)){
              distanciaTotal = 50 - S_A;
              //A partir de los 26 cm cambia el sensor
              //  de lectura por el lado mas cerca del carro
              if ((S_A>=26) && (S_B<26)){
                  distanciaTotal = S_B;
                }else{
                  distanciaTotal = 26+(26-S_A);
                }
               return distanciaTotal;
            }
    }
  }  
  `
}
