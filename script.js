const idiomas = document.getElementById('btnIdiomas')
const infosIdiomas = document.getElementById('infosIdiomas')
const idiomasContainer = document.getElementById('idiomasContainer')
const seta = document.getElementById('seta')

const projetos = document.getElementById('btnProjetos')
const infosProjetos = document.getElementById('infosProjetos')
const ProjetosContainer = document.getElementById('projetosContainer')
const setaProjetos = document.getElementById('setaProjetos')

const habilidades = document.getElementById('btnHabilidades')
const infosHabilidades = document.getElementById('infosHabilidades')
const habilidadesContainer = document.getElementById('habilidadesContainer')
const setaHabilidades = document.getElementById('setaHabilidades')

let abertoIdiomas = 0
let abertoProjetos = 0
let abertoHabilidades = 0

idiomas.addEventListener('click', () =>{
    abertoIdiomas = abertoIdiomas + 1
    if(abertoIdiomas % 2 == 0){
        infosIdiomas.classList.add('none')
        idiomasContainer.style.backgroundColor = 'transparent'
        idiomasContainer.style.borderColor = 'white'
        idiomasContainer.style.paddingBottom = '0'
        seta.style.transform = 'rotate(180deg)'
    }else{
        infosIdiomas.classList.remove('none')
        idiomasContainer.style.backgroundColor = '#55569E'
        idiomasContainer.style.borderColor = '#55569E'
        idiomasContainer.style.paddingBottom = '1rem'
        seta.style.transform = 'rotate(0deg)'
    }
})

projetos.addEventListener('click', () =>{
    abertoProjetos = abertoProjetos + 1
    if(abertoProjetos % 2 == 0){
        infosProjetos.classList.add('none')
        ProjetosContainer.style.backgroundColor = 'transparent'
        ProjetosContainer.style.borderColor = 'white'
        ProjetosContainer.style.paddingBottom = '0'
        setaProjetos.style.transform = 'rotate(180deg)'
    }else{
        infosProjetos.classList.remove('none')
        ProjetosContainer.style.backgroundColor = '#55569E'
        ProjetosContainer.style.borderColor = '#55569E'
        ProjetosContainer.style.paddingBottom = '1rem'
        setaProjetos.style.transform = 'rotate(0deg)'
    }
})

habilidades.addEventListener('click', () =>{
    abertoHabilidades = abertoHabilidades + 1
    if(abertoHabilidades % 2 == 0){
        infosHabilidades.classList.add('none')
        habilidadesContainer.style.backgroundColor = 'transparent'
        habilidadesContainer.style.borderColor = 'white'
        habilidadesContainer.style.paddingBottom = '0'
        setaHabilidades.style.transform = 'rotate(180deg)'
    }else{
        infosHabilidades.classList.remove('none')
        habilidadesContainer.style.backgroundColor = '#55569E'
        habilidadesContainer.style.borderColor = '#55569E'
        habilidadesContainer.style.paddingBottom = '1rem'
        setaHabilidades.style.transform = 'rotate(0deg)'
    }
})