import { useOutletContext } from 'react-router-dom'



export function HostVanInfo() {

    const { van } = useOutletContext()


    const styles = {
  container: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#161616"
  },
  heading: {
    fontWeight: "700",
    margin: "0"
  },
  value: {
    fontWeight: "400"
  }
}


    return (
        <section style={styles.container}>
            <h4 style={styles.heading}>Name: <span style={styles.value}>{van.name}</span></h4>
            <h4 style={styles.heading}>Category: <span style={styles.value}>{van.type}</span></h4>
            <h4 style={styles.heading}>Description: <span style={styles.value}>{van.description}</span></h4>
            <h4 style={styles.heading}>Visibility: <span style={styles.value}>Public</span></h4>
        </section>
    )
}