function toggleLockButton(idButton: string) {
  const button = document.getElementById(idButton) as HTMLButtonElement | null

  if (button) {
    let span = button.querySelector('#span-spinner')
    if (!span) {
      span = document.createElement('span')
      span.setAttribute('id', 'span-spinner')
      span.setAttribute('class', 'ml-1 ms-1 spinner-border spinner-border-sm')
      button.disabled = true
      button.appendChild(span)
    } else {
      button.disabled = false
      button.removeChild(span)
      span.remove()
    }
  }
}

function toggleLockButtonIcon(idButton: string) {
  const button = document.getElementById(idButton) as HTMLButtonElement | null

  if (button) {
    let span = button.querySelector('#span-spinner')
    let icon = button.querySelector('i');
    if (!span) {
      span = document.createElement('span')
      span.setAttribute('id', 'span-spinner')
      span.setAttribute('class', 'spinner-border spinner-border-sm')
      button.disabled = true

      if (icon) {
        icon.style.display = 'none'
      }

      button.appendChild(span)
    } else {
      button.disabled = false

      if (icon) {
        icon.style.display = 'block'
      }

      button.removeChild(span)
      span.remove()
    }
  }
}

function toggleLockButtonIconWithBadge(idButton: string) {
  const button = document.getElementById(idButton) as HTMLButtonElement | null

  if (button) {
    let span = button.querySelector('#span-spinner')
    let icons = button.querySelectorAll('i');
    if (!span) {
      span = document.createElement('span')
      span.setAttribute('id', 'span-spinner')
      span.setAttribute('class', 'spinner-border spinner-border-sm')
      button.disabled = true

      if (icons) {
        icons.forEach(el => el.style.display = 'none')
      }

      button.appendChild(span)
    } else {
      button.disabled = false

      if (icons) {
        icons.forEach(el => el.style.display = 'block')
      }

      button.removeChild(span)
      span.remove()
    }
  }
}

function toggleLockButtonInputGroup(idButton: string) {
  const button: HTMLButtonElement = document.getElementById(idButton) as HTMLButtonElement
  if (button) {
    let span = button.querySelector('span-input-group-text')
    if (!span) {
      const spanSpinner = document.createElement('span')
      spanSpinner.setAttribute('id', 'span-spinner')
      spanSpinner.setAttribute('class', 'spinner-border spinner-border-sm')

      span = document.createElement('span')
      span.setAttribute('id', 'span-input-group-text')
      span.setAttribute('class', 'input-group-text')
      span.appendChild(spanSpinner)

      button.disabled = true
      button.appendChild(span)
    } else {
      button.disabled = false
      button.removeChild(span)
      span.remove()
    }
  }
}

function toggleLockForm(idForm: string) {
  const form: HTMLFormElement = document.getElementById(idForm) as HTMLFormElement

  const formElements = form.elements

  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index] as HTMLElement
    element.classList.toggle('disabled')

  }

  const btn = form?.querySelector('button[type="submit"]') as HTMLButtonElement

  if (btn) {
    btn.disabled = !btn.disabled
  }
}

function checkStatusDisabledFromBtnSubmitForm(idBtn: string): boolean {
  const btn = document.getElementById(idBtn) as HTMLButtonElement

  return btn.disabled
}

export {
  toggleLockButton,
  toggleLockButtonInputGroup,
  toggleLockButtonIcon,
  toggleLockButtonIconWithBadge,
  toggleLockForm,
  checkStatusDisabledFromBtnSubmitForm
}
