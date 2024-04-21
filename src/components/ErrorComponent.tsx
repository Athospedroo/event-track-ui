import { useState, useEffect } from "react"
interface errorProps {
  errors: any[]
  clearError: Function
}

function ErrorComponent(props: errorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      props.clearError()
    }, 4000);

    return () => {
      clearTimeout(timer)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clearError]);
  return (  
    <div>
      {
        isVisible && (
          <div className="alert alert-danger" role="alert">
            {
              props.errors.map((error: any, index: any) => (
                <span key={index}>{error.message} </span>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export {
  ErrorComponent
}