import './styles.scss'

export const ModalVideo = ({ showVideo, videoUrl }) => {
    const videoId = videoUrl?.split('v=')[1]

    return (
        <div className={`modal-video ${showVideo ? 'active' : ''}`}>
            <div className="video-frame">
                {videoUrl &&
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allowFullScreen
                    ></iframe>
                }
            </div>
        </div>
    )
}