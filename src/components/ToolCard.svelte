<script>
    export let cardColor = "bg-primary";
    export let cardTitle;
    export let btnColor = "btn-secondary"
    export let textColor = "text-neutral"
    export let btnLink;
</script>

<div class="card {cardColor} shadow-xl w-96 {textColor}">
    <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p><slot /></p>
        <div class="card-actions justify-end">
            <a href="{btnLink}">
                <button class="btn {btnColor}">Try it!</button>
            </a>
        </div>
    </div>
</div>