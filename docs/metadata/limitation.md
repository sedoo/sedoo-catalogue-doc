
# Limitations

La seule limitation rencontrée actuellement concerne l'utilisation du require dans les SFC lors de l'importation de module. Vous ne pouvez pas convertir un SFC si vous utilisez le mot clé 'require' :
```javascript 
 var marked =  require('marked');
 ```

Vous devez utiliser le mot-clef import si le package le permet :
```javascript 
import marked from 'marked'
```