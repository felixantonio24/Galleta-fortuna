const FortuneCookie = ({data}) => {

return (
<section className="sentence-card">
    <p>{data.phrase}</p>
        <span>Autor: {data.author}</span>
    </section>
)
}
export default FortuneCookie