import { useOutletContext } from 'react-router-dom'





export function HostVanPhotos() {

    const { van } = useOutletContext()

    const styles = {
        image: {
            height: "100px",
            width: "100px",
            objectFit: "cover",
            borderRadius: "5px",
            marginTop: "24px"
        }
}

    return (
        <img 
            src={van.imageUrl} 
            alt={van.name} 
            style={styles.image} 
        />
    )
}