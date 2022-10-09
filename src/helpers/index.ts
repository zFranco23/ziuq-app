

export const mapOrderToLetter = (idx : number) => {
    switch (idx){
        case 0 : return 'A';
        case 1 : return 'B';
        case 2 : return 'C';
        case 3 : return 'D';
        //Not supported more than 4 alternatives
        default : return 'X';
    }
}