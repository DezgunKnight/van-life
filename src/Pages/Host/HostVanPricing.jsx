import { useOutletContext } from 'react-router-dom'




export function HostVanPricing() {

    const { van } = useOutletContext()


    const styles = {
        price: {
            fontSize: "24px",
            fontWeight: "700",
            color: "#161616",
            marginTop: "24px"
        },
        unit: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#4D4D4D"
        }
}

    return (
      <h3 style={styles.price}>
        ${van.price}.00<span style={styles.unit}>/day</span>
      </h3>
    )
}