export function getInitialText(text) {
   return (
      {
         "document": {
         "nodes": [
            {
               "object": "block",
               "type": "paragraph",
               "nodes": [
               {
                  "object": "text",
                  "leaves": [
                     {
                     "text": `${text}`
                     }
                  ]
               }
               ]
            }
         ]
         }
      }
   )
}