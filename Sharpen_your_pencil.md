# Sharpen Your Pencil 1

## 📝 Pregunta:
Which of the following are disadvantages of using inheritance to provide Duck behavior? (Choose all that apply.)

Opciones:

- ❏ A. Code is duplicated across subclasses.

- ❏ B. Runtime behavior changes are difficult.

- ❏ C. We can’t make ducks dance.

- ❏ D. Hard to gain knowledge of all duck behaviors.

- ❏ E. Ducks can’t fly and quack at the same time.

- ❏ F. Changes can unintentionally affect other ducks.

### ✅ Respuesta correcta:
- ✔ A. Code is duplicated across subclasses.

- ✔ B. Runtime behavior changes are difficult.

- ✔ D. Hard to gain knowledge of all duck behaviors.

- ✔ F. Changes can unintentionally affect other ducks.

### 🧠 Justificación:
- A. Code is duplicated across subclasses:
- Cada subclase tiene que sobreescribir fly() y quack() cuando no aplica, lo cual genera duplicación innecesaria.

- B. Runtime behavior changes are difficult:
Una vez compilada la jerarquía de clases, el comportamiento estático está fijado. No se puede cambiar el comportamiento de un pato sin crear una nueva subclase o modificar la existente.

- D. Hard to gain knowledge of all duck behaviors:
Al tener el comportamiento distribuido en muchas subclases, es difícil saber qué patos hacen qué sin inspeccionar cada clase manualmente.

- F. Changes can unintentionally affect other ducks:
Como ocurrió en el ejemplo: agregar fly() en la superclase afectó también a los patos que no deberían volar (como los de goma o los de decoración), introduciendo errores.

### Las otras dos opciones se descartan por estas razones:

- C.  We can’t make ducks dance:
Irrelevante. La capacidad de bailar no forma parte del problema ni del diseño original.

- E. Ducks can’t fly and quack at the same time:
No se plantea esta limitación en ningún momento. El sistema no restringe llamadas simultáneas a esos métodos.

# Sharpen Your Pencil 2
## 📝 Pregunta:
Lots of things can drive change. List some reasons you’ve had to change code in your applications.
(El libro da dos ejemplos para comenzar.)

### ✅ Respuesta (con ejemplos personalizados):
Razones por las que tuve que cambiar código en mis aplicaciones:

Mi cliente solicitó nueva funcionalidad no contemplada inicialmente.
Por ejemplo, en un sistema de monitoreo para transporte, se pidió agregar alertas SOS que no estaban previstas.

La lógica de negocio cambió debido a un nuevo acuerdo comercial.
Un partner externo cambió sus reglas de integración y tuvimos que adaptar los endpoints del backend.

Se decidió migrar a otra base de datos o proveedor externo.
En un caso, una app pasó de usar SQLite local a MySQL en la nube, y todo el acceso a datos debió reestructurarse.

Nuevas normativas legales o fiscales.
En una app de facturación, se tuvo que integrar un nuevo sistema (VeriFactu) para cumplir con legislación española.

Refactorización por deuda técnica acumulada.
En varios proyectos heredados, se reescribieron clases enteras que eran demasiado rígidas o propensas a errores.

Cambio en prioridades del cliente o stakeholders.
Muchas veces se implementa una función y luego se descarta o modifica por completo debido a una reorientación del negocio.

Problemas de rendimiento detectados en producción.
Al detectar cuellos de botella en funciones críticas, fue necesario reescribirlas para mejorar tiempos de respuesta.

# Sharpen Your Pencil 3
### 1. ¿Qué harías con el nuevo diseño si necesitas agregar vuelo con propulsión a cohete a la app SimUDuck?

- R.-Usando el nuevo diseño basado en el patrón Strategy, simplemente crearía una nueva clase llamada FlyRocketPowered que implemente la interfaz IFlyBehavior.
Esta clase definiría el método fly() para simular el vuelo con cohete.

### Ejemplo:

``` 
public class FlyRocketPowered implements IFlyBehavior {
    public void fly() {
    System.out.println("I’m flying with a rocket!");
    }
}
```
Luego, se puede asignar dinámicamente este comportamiento a cualquier pato (por ejemplo, ModelDuck) usando el método setFlyBehavior():

```
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
```

### 2. ¿Puedes pensar en una clase que quiera usar el comportamiento Quack pero que no sea un pato?

- R.-Sí, el documento menciona como ejemplo un "duck call", un dispositivo utilizado por cazadores para imitar el sonido de los patos y atraerlos.

Aunque no es un pato, este dispositivo puede aprovechar las mismas clases de comportamiento, como Quack o Squeak, ya que están separadas del objeto pato mediante el uso del patrón Strategy.
Esto significa que cualquier clase que necesite emitir un sonido similar al de un pato puede reutilizar directamente estos comportamientos sin necesidad de heredar de Duck.