import Button from './Button';
import styles from '../css/component-css/BlueCard.module.css';

interface BlueCardProps {
    title: string;
    description: string;
    hasButton: boolean;
    link: string;
}

function BlueCard({title, description, hasButton, link}: BlueCardProps) {

    if (hasButton) {
        return (
            <div className={styles.cardBody}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.button}>
                    <Button
                        link={link}
                        text="LEARN MORE"
                        isSubmit={false}
                        arrow={false}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.cardBody}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default BlueCard;