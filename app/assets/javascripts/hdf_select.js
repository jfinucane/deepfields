
function show_counts(counts) {
    console.log('Elliptical '+String(counts[1]))
    console.log('Spiral Early '+String(counts[2]))
    console.log('Spiral Late '+String(counts[3]))
    console.log('Irregular '+String(counts[4]))
    $('#active_counts').html(counts[1]+counts[2]+counts[3]+counts[4])
}