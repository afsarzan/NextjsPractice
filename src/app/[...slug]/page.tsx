export default async function Docs({params}:{
    params:Promise<{ slug:[]}>;
}) {

    const {slug}  = await params;
    return (
        <div>
            Docs page with dynamic catch all segement route
            <strong>
                {JSON.stringify(slug)}
            </strong>
        </div>
    )
}