
const d = document,
n = navigator;
export default function webCam(id) {
    const $video = d.getElementById(id);
    
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video: true, audio: false})
        .then((stream) =>{
            $video.srcObjet = stream;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin", `<p>¡Sucedio el siguiente error!: <mark>${err}</mark></p>`)
            console.log(`sucedio el siguiente error! : ${err}`);
        })
    }
}
