
import { BrowserView, MobileView} from 'react-device-detect'
import MyVideoBackground from '../assets/bgvideo7.mp4'
import MyVideoBackgroundMobile from '../assets/bgvideomobile7.mp4'


export const VideoFondo = () => {

  return (
    <>
    
      <BrowserView>      
        <video src={MyVideoBackground} className='videosize -ml-10' autoPlay={true} muted={true} loop={true} preload="auto"></video>
      </BrowserView>
      <MobileView>
      <video src={MyVideoBackgroundMobile} className='videosize -ml-10' autoPlay={true} muted={true} loop={true} preload="auto"></video>
      </MobileView>
    </>
  )
}
