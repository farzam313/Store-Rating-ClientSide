/**
 * Form Label Component
 *
 * @param {string} htmlFor - The ID of the input element
 * @param {string} children - Label text
 * @param {boolean} required - Show required asterisk
 * @param {string} className - Additional CSS classes
 */
const Label = ({ htmlFor, children, required = false, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block 
        text-sm font-medium 
        text-gray-700 dark:text-gray-300
        mb-1.5
        ${className}
      `}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-label="required">
          *
        </span>
      )}
    </label>
  );
};

export default Label;
