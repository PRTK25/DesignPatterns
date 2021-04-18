# Adapter Pattern 

## Intent
Convert interface of a class into another interface that the client expects. 

**Example**

- A drawing application has graphical elements like line, polygons, text .Line and Polygon can be defined by the application but since text rendering involves complexity thus it would be better to use an existing class. 

- If the drawing application expects a Shape Class, for text, we can define a TextShape class (Adapter) which uses an existing TextView Class (Adaptee) via private inheritance or composition. 

- The TextShape adapter privately uses the adaptee methods and exposes the shape interface thereby re-using the functionality of TextView.

## Participants

- Target  (Domain Specific Interface that Client uses)
- Client  (Collaborates with Target Objects)
- Adaptee (An existing interface that needs adapting)
- Adapter (Adapts the interface of Adaptee to Target)