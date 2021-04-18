# Abstract Factory


## Intent 

Provide an interface to create families of related objects without specifying the concrete implementations. 

**Example**:

- Widgets of an application can have different look and feel depending upon operating system. (mac / windows etc.)

- An abstract class **WidgetFactory** can be defined with abstract methods to create and return different types of widgets. 

- The Concrete Widgets can be created and returned by specific implementations of Abstract Factory ( example: **MacWidgetFactory**, **WindowsWidgetFactory**)

- The creation of widgets will be independent from the client. 

In the above example Widgets belonging to one OS will be part of one family of products. 


## Participants

- AbstractFactory
- ConcreateFactory
- AbstractProduct
- ConcreteProduct

