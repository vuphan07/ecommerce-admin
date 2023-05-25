import Icon from '@ant-design/icons';

const ProjectSvg = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.82959 10.75H4.07959C4.14834 10.75 4.20459 10.6938 4.20459 10.625V3.375C4.20459 3.30625 4.14834 3.25 4.07959 3.25H2.82959C2.76084 3.25 2.70459 3.30625 2.70459 3.375V10.625C2.70459 10.6938 2.76084 10.75 2.82959 10.75ZM5.82959 6.375H7.07959C7.14834 6.375 7.20459 6.31875 7.20459 6.25V3.375C7.20459 3.30625 7.14834 3.25 7.07959 3.25H5.82959C5.76084 3.25 5.70459 3.30625 5.70459 3.375V6.25C5.70459 6.31875 5.76084 6.375 5.82959 6.375ZM8.82959 7.5H10.0796C10.1483 7.5 10.2046 7.44375 10.2046 7.375V3.375C10.2046 3.30625 10.1483 3.25 10.0796 3.25H8.82959C8.76084 3.25 8.70459 3.30625 8.70459 3.375V7.375C8.70459 7.44375 8.76084 7.5 8.82959 7.5ZM12.2046 0.75H0.70459C0.428027 0.75 0.20459 0.973437 0.20459 1.25V12.75C0.20459 13.0266 0.428027 13.25 0.70459 13.25H12.2046C12.4812 13.25 12.7046 13.0266 12.7046 12.75V1.25C12.7046 0.973437 12.4812 0.75 12.2046 0.75ZM11.5796 12.125H1.32959V1.875H11.5796V12.125Z"
      fill="#222731"
    />
  </svg>
);

const ProjectIcon = (props) => <Icon component={ProjectSvg} {...props} />;

export default ProjectIcon;
