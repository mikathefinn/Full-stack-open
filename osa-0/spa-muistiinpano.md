```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"} ei muita html pyyntöjä, selain pysyy samalla sivulla.
    deactivate server
    Note right of browser: POST pyynnön mukana lähtee content ja date JSON muodossa:{"content":"kjdfgkhjgfkhjfgshk","date":"2023-08-23T09:39:02.472Z"}




```
