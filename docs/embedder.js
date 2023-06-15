window.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname.split('/')[1]; 

    const uri = pathname.replace(/(_[a-z])|(^[a-z])/g, group => {
        return group.toUpperCase().replace('_', ''); 
    }); 
    
    const iframe = document.createElement('iframe'); 
    iframe.setAttribute('src', `/lib/pdfviewer/web/viewer.html?file=/bin/EvanDaniel_${uri}.pdf#disablehistory=true`); 
    iframe.setAttribute('frameborder', '0'); 
    document.body.appendChild(iframe); 
})