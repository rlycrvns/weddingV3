import styles from "./nav.module.scss";

export default function Toggle({ navOpen, toggle }) {
  return (
    <button className={styles.toggle} onClick={() => toggle(!navOpen)}>
      <>
        {navOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.66667 10L4 14.6667L5.33333 16L10 11.3333L14.6667 16L16 14.6667L11.3333 10L16 5.33333L14.6667 4L10 8.66667L5.33333 4L4 5.33334L8.66667 10Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17 6H3V8H17V6Z" />
            <path d="M17 12H3V14H17V12Z" />
          </svg>
        )}
      </>
    </button>
  );
}
