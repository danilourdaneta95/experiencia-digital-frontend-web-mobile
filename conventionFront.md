![image](src/assets/logo/Universidad_San_Sebastian_Logo.svg)

# Desarrollo del Proyecto Mi Portal

## Team FrontEnd Developer

> 💡 Tablero de Jira [aquí](https://usansebastian.atlassian.net/jira/software/c/projects/TIMPDV/boards/22).
>
> 💡 Diseño de figma [aquí](https://www.figma.com/file/THz6fmCJk0i3oOQq0eQcGe/USS-UI-Component?node-id=1%3A6223).

> Con el objeto de que sea entendible y escalable el código y el proyecto para todos los involucrados (existentes o por incorporarse). Tanto para el nombramiento de sus archivos, así como el nombramiento y estructura de los componentes y las clases.
>
> Es necesarios aplicar o **desarrollar convenciones**.

<details open>
<summary>📚 Convención para trabajar en git.</summary>

<details close>
<summary> 💡 Vas a trabajar en un <b><i>nuevo componente</i> o correcciones de bug?</b> </summary>

> 1.  Debes de crear una nueva rama que emerge de la rama **dev**.

> **Ejemplo de Sintaxis.**
>
> git checkout -b feature/nombreDev_numeroTicketJira-nombreDelFeature RamaDeDondeEmerge

Ejemplo de Comando

```
git checkout -b feature/caray_TIMPDV17-sideBar dev
```

> 2. La rama que vas a crear no es un nuevo feature. Es la corrección de un bug?
>
> Debes de crear una nueva rama que emerge de la rama **dev**.
>
> **Ejemplo de Sintaxis.**
>
> git checkout -b bug/nombreDev_numeroTicketJira-nombreDelFeature RamaDeDondeEmerge

Ejemplo de Comando

```
git checkout -b bug/caray_TIMPDV17-sideBar dev
```

</details>

<details open>
<summary> 💡 Vas a realizar un <b><i>Pull Request "Pr"</i></b> de tu <b><i>nuevo feature para ser mergeado en la rama Dev?</i></b> </summary>

> 1.  Asegúrate de que no dará problemas al implementarlo.
>
> Esto se logra actualizando tu rama con el estado actual de la rama principal, que en nuestro caso es la rama **dev**
>
> 1.1 Cambia a tu rama **dev** localmente y asegúrate que se encuentra **actualizada** o al día localmente.
>
> Ejecutan el siguiente comando:
>
> ```
> git pull
> ```
>
> **1.2** Regresa a tu rama feature y asegúrate de actualizar tu rama con la rama **dev**.
>
> git merge **nombreDeLaRamaDesdeDondeDeseasActualizar**
>
> 🚨 **_Recuerda que debes estar en la rama de tu feature._**

```
git merge dev
```

> 2. 🚨 Una vez estando actualizado y resuelto los conflictos antes de realizar el Pull Request.
>    **Verificar** la inexistencias en tu rama de **warnings** y en caso de existir solucionarlos. Esto se verifica corriendo el siguiente comando en el terminal:
>
> ```
> yarn lint
> ```

> 3. 🚨 **Verificar** la inexistencias en tu rama de **errores en el build** y en caso de existir solucionarlos. Esto se verifica corriendo el siguiente comando en el terminal:
>
> ```
> yarn build
> ```

> 3.  ✔ Ya esta todo listo para realizar tu pull request. 🎉 Felicidades

</details>

<details close>
<summary> 💡 Convención para realizar commits en git.</summary>

> **build:** _Cambios relacionados con dependencias (eg: npm related/ adding external dependencies)_.

> **chore:** _Un cambio de código que el usuario externo no verá (eg: change to .gitignore file or .prettierrc file \*.md)_.

> **feat:** A new feature.

> **fix:** A bug fix.

> **docs:** Creación y/o Cambios relacionados con la documentación.

> **refactor:** Un código que no corrige el error ni agrega una característica. (eg: Puede usar esto cuando hay cambios semánticos como cambiar el nombre de una variable/función).

> **test** : Agregar una nueva prueba o hacer cambios en una prueba existente.

</details>

<details close>
<summary> 💡 Vas a <b><i>renombrar y/o mover</i></b> contenido o componentes de la estructura de archivos? </summary>

> Si desea realizar un _renombrado_ de archivo o _mover_ un archivo de la forma tradicional, es decir, usando cualquiera herramienta de sistema de archivo de tu equipo, ya sea por bash o por sistema de carpetas tanto del sistema operativo o de Visual Studio Code.
>
> **🚨 \***Desencadenaras el comportamiento indeseado en git, el cual consiste en que el archivo sera eliminado perdiendo todo su historial de cambio y que el mismo sera creado nuevamente dando toda la autoría del código para quien ha realizado el renombrado o movido su ubicación.**\* 🚨**

> Para eliminar el referido comportamiento y que perdure en el tiempo el historial tanto del archivo como de los developers que han trabajado en el archivo. Debe de seguir el siguiente procedimiento:
>
> 1.  Abra Terminal y dirígete al directorio de trabajo actual de tu repositorio local.
> 2.  Renombra el archivo, especificando el nombre de archivo antiguo y el nombre de archivo nuevo que le quieres asignar. Esto preparará tu cambio para la confirmación.
>
> ```bash
> git mv old_filename new_filename
> ```
>
> 3.  En caso de mover el archivo a otra carpeta.
>
> ```bash
> git mv ./src/components/button/buttonIcon.tsx ./src/components/core/buttonIcon.tsx
> ```
>
> 4.  En caso de mover carpeta entera a otra carpeta.
>
> NOTA: La Carpeta de destino debe de existir, en caso de su inexistencia debe ser creada.
>
> ```bash
> git mv ./src/components/button/ ./src/components/core/
> ```

</details>

</details>

<details open>
<summary>📚 Convención de estructura de archivos.</summary>

```
├── public            // Archivos expuestos públicamente.
├── src
│   ├── assets        // Assets del proyecto que no serán expuesto públicamente.
│    └── img
│   ├── components
│    └── core         // Componentes Core del proyecto.
│     └── button      // Carpeta de un Componente Core del proyecto.
│    └── customs      // Componentes Customs - Estilos Customs de componentes Core del proyecto.
│   ├── context
│   ├── hook
│   ├── layout
│   ├── pages
│    └── index.tsx   // Pagina de Home.
│   ├── services
│   ├── styles
│    └── fonts.css   // Clases globales con impacto en las fuentes.
│    └── global.css  // Todas las clases que tenga impacto global.
│    └── theme.css   // Variables de ambientes del tema.
└──
```

#

</details>

<details close>
<summary>📚 Convención de nombrado de archivos.</summary>

> - El nombre asignado estará formado por caracteres alfabéticos: a-z A-Z.
> - No debe contener **caracteres alfanuméricos**, **signos de puntuación**, **espacios en blanco**, **caracteres acentuados**, **eñes**, etc.
> - No esta permitido **subrayado \_** y o el **guion –**

> - **NOTA**: En caso de ser necesario nombrar un archivo con dos palabras compuestas ejemplo carta y categoría.
>   Se aplicara la convención **camelCase**
>   Ejemplo: **cartaCategoria.xxx**

#

</details>

<details close>
<summary>📚 Convención de nombrado de estilos css.</summary>

> La convención adoptada en el proyecto para el nombrado de clases css el la **Metodología** [SMACSS]()

---

> # SMACSS (Scalable and Modular Architecture for CSS)
>
> **SMACSS**. Escalable y modular arquitectura para CSS ha sido desarrollada por el diseñador **Jonathan Snook**.

> En el núcleo mismo de SMACSS está en la categorización de CSS. Haciendo una clasificación de 5 tipos de categorías y reglas;

> Ejemplos:

##

> ## 1. [Base Rules]()
>
> Una regla base se aplica a un elemento mediante un selector de elementos, un selector descendiente o un selector secundario, junto con cualquier pseudoclase. No incluye ninguna clase o selectores de ID. Está definiendo el estilo predeterminado de cómo debe verse ese elemento en todas las apariciones en la página.

```css
body,
form {
  margin: 0;
  padding: 0;
}

a {
  color: #039;
}

a:hover {
  color: #03f;
}
```

---

> ## 2. [Layout]()
>
> Los estilos de diseño también se pueden dividir en estilos principales y secundarios en función de la reutilización. Los principales estilos de diseño, como el encabezado y el pie de página, se diseñan tradicionalmente con selectores de ID, pero tómese el tiempo para pensar en los elementos que son comunes en todos los componentes de la página y use selectores de clase cuando corresponda.

```css
#Header,
#Article,
#Footer {
  width: 960px;
  margin: auto;
}

#Article {
  border: solid #ccc;
  border-width: 1px 0 0;
}
```

---

> ## 3. [Module]()
>
> Un Módulo es un componente más discreto de la página. Son sus barras de navegación y sus carruseles y sus diálogos y sus widgets y demás. Esta es la carne de la página. Los módulos se ubican dentro de los componentes de diseño. A veces, los módulos también pueden ubicarse dentro de otros módulos. Cada módulo debe estar diseñado para existir como un componente independiente. Al hacerlo, la página será más flexible. Si se hace bien, los módulos se pueden mover fácilmente a diferentes partes del diseño sin romperse.

```css
module > h2 {
  padding: 5px;
}

.module span {
  padding: 5px;
}
```

---

> ## 4. [State]()
>
> Un estado es algo que aumenta y anula todos los demás estilos. Por ejemplo, una sección de acordeón puede estar en un estado colapsado o expandido. Un mensaje puede estar en un estado de éxito o de error.

Los estados generalmente se aplican al mismo elemento como una regla de diseño o se aplican al mismo elemento como una clase de módulo base.

```html
<div id="Header" class="is-collapsed">
  <form>
    <div class="msg is-error">There is an error!</div>
    <label for="searchbox" class="is-hidden">Search</label>
    <input type="search" id="Searchbox" />
  </form>
</div>
```

---

> ## 5. [Theme]()
>
> Probablemente, sea evidente, pero un tema define colores e imágenes que le dan a su aplicación o sitio su apariencia. Separar el tema en su propio conjunto de estilos permite que esos estilos se redefinan fácilmente para temas alternativos.

Los temas pueden afectar a cualquiera de los tipos primarios. Podría anular los estilos base como los colores de enlace predeterminados. Podría cambiar los elementos del módulo, como los colores cromados y los bordes. Podría afectar el diseño con diferentes arreglos. También podría alterar el aspecto de los estados.

```css
/* in module-name css */
.mod {
  border: 1px solid;
}

/* in theme css */
.mod {
  border-color: blue;
}
```

</details>

<!--
Perfiles de Usuarios a considerar en el Proyecto
* Funcionarios
* Estudiantes
* Docentes

-->
