import { Video, VideoContainer } from "./styles"
import FogsOverMountain from "../../assets/videos/fogs_over_the_mountain_by_tobias_bjorkli.mp4"

function VideoBackground() {
    return (
        <VideoContainer>
            <Video autoPlay muted>
                <source src={FogsOverMountain} type="video/mp4" />
            </Video>
        </VideoContainer>
    )
}

export default VideoBackground
