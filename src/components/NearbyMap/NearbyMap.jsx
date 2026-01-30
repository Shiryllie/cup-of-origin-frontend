import './NearbyMap.css'


function NearbyMap() {
    return (
        <div className="nearby-map">
        <iframe src="https://www.google.com/maps/d/embed?mid=15W4ypc4vPMmuiREY-zj6yiNnx710KSc&ehbc=2E312F&noprof=1"
                width="100%"
                height="600px"
                style={{border:0}} allowFullScreen></iframe>
        </div>
    )
}

export default NearbyMap;