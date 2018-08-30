# backbench-nodeapi
Challenge completed
Implement a virtual "File manager" using NodeJs. This should be a webapp.

You can proceed in following steps:-

    Designing a data structure for storing file/folder metadata (hierarchy of files/folder).
    Use a database to store it. (can store in file too)
    Now create a /browse API this receives a query parameter as path and based on that you can able to explore the file system.
    Create a /create API that receives parameters as path, content, type(file or folder).
    Similarly create and API endpoint for /delete.
    Organise above in a way that it feels like a proper file-manager. (like adding a dialogue for creating a file/folder etc.)

Bonus:

    Create /update API endpoint.
    Integrate the Update API above properly in UI flow.

Note

You should be able to browse through all files using /browse. The files hierarchy can be like;

newdocs/
├── client-dashboard.md
└── pages
    ├── auth
    │   └── oauth.md
    └── auth.md

Fork this assignment, put your code on github then submit.
