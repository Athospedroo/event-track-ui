import { useState, useEffect } from "react"
interface successProps {
  message: any
  clearMessage: Function
}

function SuccessComponent(props: successProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      props.clearMessage()
    }, 4000);

    return () => {
      clearTimeout(timer)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clearMessage]);
  return (
    <div>
      {
        isVisible && (
          <div className="alert alert-success" role="alert">
            {
              <span>{props.message} </span>
            }
          </div>
        )
      }
    </div>
  )
}

export {
  SuccessComponent
}