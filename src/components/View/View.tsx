import Script from 'next/script'

interface ViewProps {
  strategy?: string
  children: JSX.Element | null
}

function Scripts(strategy: any) {
  return (
    <>
      <Script src='/template/vendor/flatpickr/dist/flatpickr.min.js' strategy={strategy.strategy} onReady={() => {

        const localePTScript = document.createElement('script')
        localePTScript.setAttribute('src','/template/vendor/flatpickr/dist/l10n/pt.js')
        document.body.appendChild(localePTScript)
        
        localePTScript.addEventListener("load", () => {
          
          const rangePlugin = document.createElement('script')
          rangePlugin.setAttribute('src','/template/vendor/flatpickr/dist/plugins/rangePlugin.js')
          document.body.appendChild(rangePlugin)
          
          rangePlugin.addEventListener("load", () => {
            const themeScript = document.createElement('script')
            themeScript.setAttribute('src','/template/js/theme.min.js')
            document.body.appendChild(themeScript)
          })
        })
      }}/>
    </>
  )
}

function View(props: ViewProps) {

  let strategy = ""
  if (props.strategy === undefined) {
    strategy = "afterInteractive"
  } else {
    strategy = props.strategy
  }

  return (
    <>
      {props.children}
      <Scripts strategy={strategy}/>
    </>
  )
}

export {
  View
}
