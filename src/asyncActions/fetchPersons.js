export const fetchPersons = () => {
    return function(dispatch) {
        fetch('https://file.notion.so/f/s/b697dfd0-4a6f-4555-bd14-60559f2a8179/users.json?id=cc13eeae-fbeb-4b40-9b71-228fe193a8f6&table=block&spaceId=a73b0a18-75ee-4904-8f1e-0681ca27036a&expirationTimestamp=1687869427897&signature=B9WBV2-uvmcf_4Eap47cwCRuVfd1r0cu6uT0fmhP16s&downloadName=users.json')
        .then(res => res.json())
        .then(res => dispatch({type: 'GET_ALL_PERSONS', payload: res}))
    }
}