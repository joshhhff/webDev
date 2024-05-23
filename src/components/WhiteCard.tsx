import Button from './Button';
import styles from '../css/component-css/WhiteCard.module.css';

interface BlueCardProps {
    title: string;
    description: string;
    hasButton: boolean;
    link: string;
    buttonHasArrow: boolean;
}

function BlueCard({title, description, hasButton, link, buttonHasArrow}: BlueCardProps) {

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
                        arrow={buttonHasArrow}
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