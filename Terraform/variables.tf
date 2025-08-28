# AWS region
variable "aws_region" {
    description = "AWS region where resources will be the provisioned"
    default     = "ap-south-1"
}

# AMI ID
variable "ami_id" {
    description = "AMI ID for the EC2 instance"
    default     = "ami-0f918f7e67a3323f0"
}

# Instance type
variable "instance_type" {
    description = "EC2 instance type"
    default     = "t3.large"
}