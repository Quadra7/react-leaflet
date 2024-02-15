import './style.css';

export default function DialogButton({isActive, ...props}) {
    return (
        <button
            {...props}
            className={isActive ? "button active" : "button"}
        >
            {isActive ? "X" : "?"}
        </button>
    );
}