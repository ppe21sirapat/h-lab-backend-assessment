```mermaid
erDiagram

    product {
        id int PK
        price int
    }

    language {
        id int PK
        name string
        code string
    }

    productLanguage {
        id int PK
        languageId int FK
        productId int FK
        name string
        description string
    }

```
