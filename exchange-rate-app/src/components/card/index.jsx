import { Card as PrimeCard } from 'primereact/card';


const Card = (props) => {
    return (
        <PrimeCard className={props.className} title={props.title} subTitle={props.subTitle}>
            {props.children}
        </PrimeCard>
    )
}

export default Card