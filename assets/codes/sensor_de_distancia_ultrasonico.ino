// define los pins
const int trigPin = 9; //Revisá tu conexión en el caso que uses pines diferentes
const int echoPin = 10; //Revisá tu conexión en el caso que uses pines diferentes
// define las variables
long duracion;
int distancia; // para distancia en cm
int distancia2; // para distancia en mm

void setup() {
  pinMode(trigPin, OUTPUT); // Defino trigPin como salida
  pinMode(echoPin, INPUT); // Defino trigPin como entrada del eco
  Serial.begin(9600); // Comienza la comunicación serial
}

void loop() {
  // Limpia posible ruido del trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Seteo el trigPin on HIGH state for 10 micro segundos 
  // en otras palabras creo la señal
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Leo la lectura devuelta por echoPin, que es la duración de onda de sonido  en microsegundos
  duracion = pulseIn(echoPin, HIGH);
  // Calculo de distancia    340 m/s (velocidad del sonido) = 0.034 cm/ms(micro segundos)
  // distancia = velocidad del sonido * tiempo Ping
  //divido 2 por el ping ida y vuelta

  distancia2 = (duracion * 0.034 / 2)*10;
  // Imprimo la distancia en el Serial Monitor
  if (distancia2 < 640 and distancia2>0) { // establescos maximos y minimos posibles
  	Serial.println(distancia2);
  }
}
