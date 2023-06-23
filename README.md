# evandaniel.com

This is source code for my home page, [evandaniel.com](https://evandaniel.com).

## Structure 

The site is structured in two parts.  As a media artist, my practice focuses on educational technology.  Because traditional blog posts don't reflect the conceptual nature of the text, I opted to embed a PDF viewer.  To link to the different files, I created a simple landing page in React.  

### React 

React was chosen to simplify deployment and standardize the development.  Because there is no routing, the React component of the site is relatively simple.  The largest benefit from using React in the structure of the site was in parameterizing the list of projects, which is defined in a single object.  

### PDF Viewer 

The individual PDFs were built in Latex.  Linking to static PDFs is possible on desktop, but mobile devices download each file.  I overcame this by leveraging Mozilla's PDFViewer.  Since the site is hosted on GitHub, they are opened with a 404 script that passes the path to an iframe.  

## Design 

The design of the site uses a visual identity built around a circle bisected by its diameter (or two semicircles or lunettes).  This is a reference to my artistic practice, which makes frequent use of the number π.  The portfolio items animate to emphasize their circularity.  Notably, to size correctly on different screens, I used a CSS technique of padding each element with a ratio, and using an outline instead of a border; without these techniques, the circles would become ellipses at high magnifications.  