// import moment from 'moment'

// export const fromNowFilter = {
//   filters: {
//     fromNow(dateTime) {
//       if (!dateTime) return "-";
//       return moment(dateTime).fromNow();
//     },
//   },
// }

export const emptyImageFilter = {
  filters: {
    emptyImageFilter(src) {
      return src || 'https://via.placeholder.com/50x50/DFDFDF?text=No+Image'
    }
  }
}