import SkeletonAggregate from '../skeleton/Skeleton.Aggregate';
import SkeletonNewsDetail from '../skeleton/Skeleton.NewsDetail';
import SkeletonList from '../skeleton/Skeleton.List';
import Skeleton12345 from '../skeleton/Skeleton.12345';

export default {
    install: function(Vue) {
        Vue.component('imui2-sklt-aggregate', SkeletonAggregate);
        Vue.component('imui2-sklt-news-detail', SkeletonNewsDetail);
        Vue.component('imui2-sklt-list', SkeletonList);
        Vue.component('imui2-sklt-12345', Skeleton12345);
    }
}