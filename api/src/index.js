import app from './server'


async function main() {
    await app.listen(3000)
    console.log(`Server Up`)
}

main()