const handleDownload = (data, linkName) => {
  const jsonData = JSON.stringify(data)
  const blob = new Blob([jsonData], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = linkName
  link.click()
}

export default handleDownload
