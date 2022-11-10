// Func
const onOpenModal = () => {
    $mainWrapper.attr('aria-hidden', 'true')
    $modal.attr('aria-hidden', 'false')
    $body.addClass('no-scroll')
    $modal.css('display', 'flex')
    $modalCloseBtn.focus()
 }
  
 const onCloseModal = () => {
    $mainWrapper.attr('aria-hidden', 'false')
    $modal.attr('aria-hidden', 'true')
    $body.removeClass('no-scroll')
    $modal.css('display', 'none')
    $openModalBtn.focus()
 }