<></>;function render() { let $$props: SvelteAllProps;

    let name = $$props['name'];
;
<><h1>{name}</h1>
</>
return { props: {}, slots: {} }}

export default class {
    $$prop_def = __sveltets_partial_with_any(render().props)
    $$slot_def = render().slots
}