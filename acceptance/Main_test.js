Feature('Main Test')

Scenario('I test create-react-app', (I) => {
    I.amOnPage('/')
    I.see('Welcome to React')
})