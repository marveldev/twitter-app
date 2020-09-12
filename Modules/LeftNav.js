const leftSideNav = () => {
  return `
    <nav class="left-side-nav">
      <a href="#" class="logo">
        <i class='fab fa-twitter'></i>
      </a>
      <a href="#"><i class="glyphicon glyphicon-home"></i><strong>Home</strong></a>
      <a href="#"><i class='fas fa-hashtag'></i><strong>Explore</strong></a>
      <a href="#"><i class='fas fa-bell'></i><strong>Notifications</strong></a>
      <a href="#"><i class="fa fa-envelope-o"></i><strong>Messages</strong></a>
      <a href="#"><i class="fa fa-bookmark-o"></i><strong>Bookmarks</strong></a>
      <a href="#"><i class="fa fa-list-alt"></i><strong>Lists</strong></a>
      <a href="#"><i class='fas fa-user-alt'></i><strong>Profile</strong></a>
      <a href="#" id="dropdown-button"><i class="fa fa-caret-down"></i><strong>More</strong></a>
      <a href="#" id="tweet-modal-icon"><i class='fas fa-feather-alt'></i></a>
      <button id="tweet-modal-button">Tweet</button>
      <a href="#">
        <img src="https://images.pexels.com/photos/3921857/pexels-photo-3921857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          class="nav-photo" alt="my profile picture">
        <strong>Marvelwonders</strong>
      </a>
    </nav>
    <nav class="smallscreen-nav">
      <a href="#" id="smallscreen-modal"><i class='fas fa-feather-alt'></i></a>
      <a href="#" id="smallscreen-home"><i class="glyphicon glyphicon-home"></i></a>
      <a href="#" id="smallscreen-trend"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fas fa-bell"></i></a>
      <a href="#"><i class="fa fa-envelope-o"></i></a>  
    </nav>
  `
}
export default leftSideNav;