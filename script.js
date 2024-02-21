
function volumeOfSphere(e) {
  //Write your code here
  e.preventDefault();
  const radius = document.querySelector("#radius").value;
  document.querySelector("#volume").value =
    (4 * 3.1415927999999997 * radius ** 3) / 3;
}
 
document.querySelector("#MyForm").addEventListener("submit", volumeOfSphere);