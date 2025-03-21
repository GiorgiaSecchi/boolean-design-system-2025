import reset from "../styles/reset.css?raw";
import typography from "../styles/typography.css?raw";

/**
 * GlobalStyles component applies global CSS styles to the application.
 * It combines reset and typography styles into a single style element.
 *
 * @returns {JSX.Element} A style element containing the global CSS styles.
 */
export const GlobalStyles = () => {
  return <style>{`${reset} ${typography}`}</style>;
};
