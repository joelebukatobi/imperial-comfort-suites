// React
import { useEffect, useState } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Link from 'next/link';
// Redux Toolkit
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '@/features///user/userActions';

export default function Sidebar({ user }) {
  // State
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // Logout Dispatch
  const logout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => navigate('/admin'));
  };
  // Route
  const pathname = useRouter().pathname;
  const navigate = useRouter().push;

  console.log(user);

  // Toggle Menu
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="sidebar">
      <div className="">
        <ul>
          <li
            className={`
            ${pathname === '/admin' ? ' text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${pathname === '/admin' ? ' stroke-black' : 'stroke-black/70'}`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 22V12H15V22" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <Link href="/admin">Dashboard</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${pathname === '/admin/posts' || pathname.includes('posts') ? 'text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/posts' || pathname.includes('posts') ? ' stroke-black' : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link href="/admin/posts">Posts</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/categories' || pathname.includes('categories')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/categories' || pathname.includes('categories')
                      ? 'stroke-black'
                      : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17" cy="17" r="3" stroke="" strokeWidth="2" />
                  <path
                    d="M4 19V15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M4 9V5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M14 9V5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9Z"
                    stroke=""
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <Link href="/admin/categories">Categories</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${pathname === '/admin/tags' || pathname.includes('tags') ? ' text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/tags' || pathname.includes('tags') ? ' stroke-black' : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link href="/admin/tags">Tags</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/subscriptions' || pathname.includes('subscriptions')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/subscriptions' || pathname.includes('subscriptions')
                      ? '!fill-black'
                      : '!fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.95 22L11.7 17.75L13.1 16.35L15.95 19.2L21.6 13.55L23 14.95L15.95 22ZM12 11L20 6H4L12 11ZM12 13L4 8V18H9.15L11.15 20H4C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V10.35L20 12.35V8L12 13Z"
                    fill=""
                  />
                </svg>
              </div>
              <Link href="/admin/subscriptions">Subscriptions</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/listings' || pathname.includes('listings')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/listings' || pathname.includes('listings') ? ' !fill-black' : '!fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 19.5C4.08333 19.5 3.72933 19.354 3.438 19.062C3.146 18.7707 3 18.4167 3 18C3 17.5833 3.146 17.2293 3.438 16.938C3.72933 16.646 4.08333 16.5 4.5 16.5C4.91667 16.5 5.27067 16.646 5.562 16.938C5.854 17.2293 6 17.5833 6 18C6 18.4167 5.854 18.7707 5.562 19.062C5.27067 19.354 4.91667 19.5 4.5 19.5ZM8 19V17H21V19H8ZM4.5 13.5C4.08333 13.5 3.72933 13.354 3.438 13.062C3.146 12.7707 3 12.4167 3 12C3 11.5833 3.146 11.2293 3.438 10.938C3.72933 10.646 4.08333 10.5 4.5 10.5C4.91667 10.5 5.27067 10.646 5.562 10.938C5.854 11.2293 6 11.5833 6 12C6 12.4167 5.854 12.7707 5.562 13.062C5.27067 13.354 4.91667 13.5 4.5 13.5ZM8 13V11H21V13H8ZM4.5 7.5C4.08333 7.5 3.72933 7.354 3.438 7.062C3.146 6.77067 3 6.41667 3 6C3 5.58333 3.146 5.22933 3.438 4.938C3.72933 4.646 4.08333 4.5 4.5 4.5C4.91667 4.5 5.27067 4.646 5.562 4.938C5.854 5.22933 6 5.58333 6 6C6 6.41667 5.854 6.77067 5.562 7.062C5.27067 7.354 4.91667 7.5 4.5 7.5ZM8 7V5H21V7H8Z"
                    fill=""
                  />
                </svg>
              </div>
              <Link href="/admin/listings">Listings</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/reviews' || pathname.includes('reviews') ? ' text-black font-bold' : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/reviews' || pathname.includes('reviews')
                      ? ' !fill-black stroke-none'
                      : '!fill-black/70 stroke-none'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.55 13.975C11.6333 14.175 11.7833 14.275 12 14.275C12.2167 14.275 12.3667 14.175 12.45 13.975L13.55 11.55L15.975 10.45C16.175 10.3667 16.275 10.2167 16.275 10C16.275 9.78333 16.175 9.63333 15.975 9.55L13.55 8.45L12.45 6.025C12.3667 5.825 12.2167 5.725 12 5.725C11.7833 5.725 11.6333 5.825 11.55 6.025L10.45 8.45L8.025 9.55C7.825 9.63333 7.725 9.78333 7.725 10C7.725 10.2167 7.825 10.3667 8.025 10.45L10.45 11.55L11.55 13.975ZM2 19.575V4C2 3.45 2.196 2.979 2.588 2.587C2.97933 2.19567 3.45 2 4 2H20C20.55 2 21.021 2.19567 21.413 2.587C21.8043 2.979 22 3.45 22 4V16C22 16.55 21.8043 17.021 21.413 17.413C21.021 17.8043 20.55 18 20 18H6L3.7 20.3C3.38333 20.6167 3.02067 20.6873 2.612 20.512C2.204 20.3373 2 20.025 2 19.575ZM4 17.175L5.175 16H20V4H4V17.175ZM4 4V17.175V4Z"
                    fill=""
                  />
                </svg>
              </div>
              <Link href="/admin/reviews">Reviews</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          {user && user.role.id === 1 ? (
            <li
              className={`${
                pathname === '/users' || pathname.includes('users') ? ' text-black font-bold ' : 'text-black/70'
              } no-highlight`}
              onClick={toggle}
            >
              <div className="flex items-center">
                <div className="h-[2rem]">
                  <svg
                    className={`${
                      pathname === '/user' || pathname.includes('user') ? ' stroke-black' : 'stroke-black/70'
                    }`}
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* <Link href={`/admin/user`}>Profile</Link> */}
                Users
              </div>
              <svg
                className={`${
                  open && (pathname === '/admin' || pathname === '/users' || pathname.includes('users'))
                    ? ' stroke-black font-bold rotate-180'
                    : 'stroke-black/70'
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <ul className={open ? 'block no-highlight' : 'hidden'}>
                <li>
                  <Link href="/admin/users">All Users</Link>
                </li>
                <li>
                  <Link href={`/admin/users/${user.username}`}>My Profile</Link>{' '}
                </li>
              </ul>
            </li>
          ) : (
            <li
              className={`${
                pathname === '/users' || pathname.includes('users') ? ' text-black font-bold' : 'text-black/70'
              }`}
            >
              <div className="flex items-center">
                <div className="h-[2rem]">
                  <svg
                    className={`${
                      pathname === '/users' || pathname.includes('users') ? ' stroke-black' : 'stroke-black/70'
                    }`}
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Link href={`/admin/users/${user.username}`}>Profile</Link>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden"
              >
                <path
                  d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          )}
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-black/70 hover:text-black">
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className="stroke-black/70 hover:stroke-black"
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.2959 21.5586H5.2959C4.76547 21.5586 4.25676 21.3479 3.88168 20.9728C3.50661 20.5977 3.2959 20.089 3.2959 19.5586V5.55859C3.2959 5.02816 3.50661 4.51945 3.88168 4.14438C4.25676 3.76931 4.76547 3.55859 5.2959 3.55859H9.2959"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2959 17.5586L21.2959 12.5586L16.2959 7.55859"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.2959 12.5586H9.2959"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                onClick={(e) => (
                  e.preventDefault(),
                  setTimeout(() => {
                    logout();
                  }, 1500)
                )}
              >
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
