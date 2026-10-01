document.addEventListener('DOMContentLoaded', () => {

    const editButton = document.querySelector('.editProfile-btn');
    const profileName = document.querySelector('.profile-name');
    const profileHandle = document.querySelector('.username');
    const profileBio = document.querySelector('.profile-bio');

    editButton.addEventListener('click', () => {

        const newName = prompt('Enter your new name:');

        
        const newHandle = prompt(
            'Enter your new username (without @):');

        const newBio = prompt('Enter your new bio:');

        if (newName !== null && newName.trim() !== '') {
            profileName.textContent = newName.trim();
        }

        if (newHandle !== null && newHandle.trim() !== '') {
            let formattedHandle = newHandle.trim();

            if (!formattedHandle.startsWith('@')) {
                formattedHandle = '@' + formattedHandle;
            }

            profileHandle.textContent = formattedHandle;
        }

        if (newBio !== null) {
            profileBio.textContent = newBio.trim();
        }

        const updatedData = {
            name: profileName.textContent,
            handle: profileHandle.textContent,
            bio: profileBio.textContent
        };

        sendDataToServer(updatedData);
    });

    function sendDataToServer(data) {
        console.log('Sending updated profile text to server:', data);
    }

});
