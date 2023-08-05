const url = 'https://buh.foto-lavka.ru/api?'
export async function getData(filter) {
    const res = await fetch(url + new URLSearchParams(filter)).then(res => res.json())
    return res
}
// function Example() {

//     const { isLoading, error, data } = useQuery('repoData', () =>
//       fetch('https://buh.foto-lavka.ru/api').then(res =>
//         res.json()
//       )
//     )

//     if (isLoading) return 'Loading...'

//     if (error) return 'An error has occurred: ' + error.message


//     return (
//       <div>
//         <h1>{data.data.docs[1].id}</h1>
//       </div>
//     )
//   }