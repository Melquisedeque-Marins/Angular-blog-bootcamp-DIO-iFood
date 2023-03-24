export const dataFake:dataModel[] = [
    {
        'id':'1',
        'bannerImg':'https://images.adsttc.com/media/images/63c5/b726/760d/d25c/1868/62b7/large_jpg/tornar-o-imaginario-visivel-as-cidades-futuristas-do-cinema_8.jpg?1673901872',
        'title' : 'Lançamento do blog da MCK Enterprises.',
        'description': 'No dia 23/03/2022 está sendo lançado o blog oficial da MCK Enterprises. Empresa de um homem só fundada em 2022 em Portugal.'
    },
    {
        'id':'2',
        'bannerImg':'https://cbrmaringa.files.wordpress.com/2018/09/a-cruz-vazia.jpg',
        'title' : 'A cruz vazia',
        'description': 'A cruz vazia'
    },
    {
        'id':'3',
        'bannerImg':'https://imagens.publico.pt/imagens.aspx/774236?tp=KM&db=IMAGENS&type=JPG&db=IMAGENS&w=960',
        'title' : 'Chegou o novo tesla Model S',
        'description': 'Chegou o novo tesla Model S'
    },
    {
        'id':'4',
        'bannerImg':'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-2.jpg?quality=90&strip=info',
        'title' : 'A nossa casa dos sonhos.',
        'description': 'A nossa casa dos sonhos.'
    }
];

export type dataModel = {
    id:string;
    bannerImg:string;
    title:string;
    description:string;
} 